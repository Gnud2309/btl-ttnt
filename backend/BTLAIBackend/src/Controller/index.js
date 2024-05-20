const DataTrainingModel = require("../models/DataTrainingModel");
const calcIG = (x, y, z) => {
    if (x === 0 || y == 0) return 0;
    return -x / z * Math.log2(x / z) - y / z * Math.log2(y / z);
}
const generate = (rows, attributes, describe ) => {
    const obj = {} ;
    const sizeRows = rows.filter((value) => value.dataValues.label).length;
    if (sizeRows === rows.length || sizeRows === 0) {
        if (sizeRows === rows.length) {
            obj.name = "YES";
            if(describe !== 'none') obj.value = describe ; 
            obj.children  = [] ;
            return obj ; 
        }
        else {
            obj.name  = "NO";
            if(describe !== 'none') obj.value = describe ; 
            obj.children  = [] ;
            return obj ;
        }
    }
    if (attributes.length === 0) {
        const labelYES = rows?.filter((value) => value.dataValues.label).length;
        const labelNO = rows?.filter((value) => !value.dataValues.label).length;
        if (labelYES > labelNO) {
            obj.name  = "YES";
            if(describe !== 'none') obj.value = describe ; 
            obj.children  = [] ; 
            return obj ; 
        }
        else {
            obj.name  = "NO";
            if(describe !== 'none') obj.value = describe ; 
            obj.children  = [] ;  
            return obj ; 
        }
    }
    const mapping = {
        monChinh: ['Thịt cá sấu', 'Thịt hùm'],
        salad: ['salad khế', 'salad bí đao'],
        soup: ['súp bào ngư', 'súp mực'],
        trangMieng: ['kem trái cây', 'ổi'],
        doUong: ['nước lọc', 'coca'],
        noodles: ['hảo hảo', 'kokomi'],
        gao: ['tấm', 'tẻ',],
    };
    // const mapping = {
    //     troi: ['nắng', 'u ám', 'mưa'],
    //     nhietDo: ['nóng', 'lạnh', 'trung bình'],
    //     doAm: ['cao', 'bình thường'],
    //     gio: ['mạnh', 'yếu'],
    // };
    let IG = -1;
    let whatAtrtribute = -1;
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        const labelYES = (rows?.filter((value) => value.dataValues.label).length);
        const labelNO = (rows?.filter((value) => !(value.dataValues.label)).length);
        const labelAll = rows?.length;
        const HS = calcIG(labelYES, labelNO, labelAll);
        let rest = HS;
        mapping[attribute]?.forEach((strongWeak) => {
            const labelYES = (rows?.filter((value) => value.dataValues.label && (value.dataValues)[attribute] === strongWeak).length);
            const labelNO = (rows?.filter((value) => !(value.dataValues.label) && (value.dataValues)[attribute] === strongWeak).length);
            const labelAll = labelYES + labelNO;

            const Ha = calcIG(labelYES, labelNO, labelAll) * labelAll / rows?.length;
            rest -= Ha;
        });
        if (rest > IG) {
            IG = rest;
            whatAtrtribute = attribute;
        }
    }
    obj.name = whatAtrtribute;
    if(describe !== 'none') obj.value = describe ; 
    obj.children = [];
    mapping[whatAtrtribute]?.forEach((strongWeak) => {
        const fakeAttributes = attributes.filter((value) => value !== whatAtrtribute);
        const newRows = structuredClone(rows).filter((value) => (value.dataValues)[whatAtrtribute] === strongWeak);  
        obj.children.push(generate(newRows, fakeAttributes, strongWeak));   
    });
    return obj ; 
}
const buildTree = async () => {
    const data = await DataTrainingModel.findAll();
    const ans =  generate(data, ['monChinh', 'salad', 'soup', 'trangMieng', 'doUong', 'noodles', 'gao'], 'none');
    return ans ; 
}
module.exports = { buildTree };  