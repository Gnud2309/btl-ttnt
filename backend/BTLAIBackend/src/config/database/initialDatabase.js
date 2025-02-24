const {buildTree } = require('../../Controller');
const sequelize = require('../../models/sequelize');
async function initialDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        const DataTrainingModel = require('../../models/DataTrainingModel');
        // ------------------------start sync------------------------
        await sequelize.sync({force : true}); 
        const trains = [

            { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt cá sấu', salad: 'salad bí đao', soup: 'súp mực', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp bào ngư', trangMieng: 'ổi', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'nước lọc', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'hảo hảo', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: true }, 
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'kem trái cây', doUong: 'coca', noodles: 'kokomi', gao: 'tẻ', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tấm', label: false },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: true },
            // { monChinh: 'Thịt hùm', salad: 'salad khế', soup: 'súp mực', trangMieng: 'ổi', doUong: 'nước lọc', noodles: 'hảo hảo', gao: 'tẻ', label: false },
        ]

        // const schools = [
        //     {
        //         troi: 'nắng',
        //         nhietDo: 'nóng',
        //         doAm: 'cao',
        //         gio: 'yếu',
        //         label: false
        //     },
        //     {
        //         troi: 'nắng',
        //         nhietDo: 'nóng',
        //         doAm: 'cao',
        //         gio: 'mạnh',
        //         label: false
        //     },
        //     {
        //         troi: 'u ám',
        //         nhietDo: 'nóng',
        //         doAm: 'cao',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'mưa',
        //         nhietDo: 'trung bình',
        //         doAm: 'cao',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'mưa',
        //         nhietDo: 'lạnh',
        //         doAm: 'bình thường',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'mưa',
        //         nhietDo: 'lạnh',
        //         doAm: 'bình thường',
        //         gio: 'mạnh',
        //         label: false
        //     },
        //     {
        //         troi: 'u ám',
        //         nhietDo: 'lạnh',
        //         doAm: 'bình thường',
        //         gio: 'mạnh',
        //         label: true
        //     },
        //     {
        //         troi: 'nắng',
        //         nhietDo: 'trung bình',
        //         doAm: 'cao',
        //         gio: 'yếu',
        //         label: false
        //     },
        //     {
        //         troi: 'nắng',
        //         nhietDo: 'lạnh',
        //         doAm: 'bình thường',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'mưa',
        //         nhietDo: 'trung bình',
        //         doAm: 'bình thường',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'nắng',
        //         nhietDo: 'trung bình',
        //         doAm: 'bình thường',
        //         gio: 'mạnh',
        //         label: true
        //     },
        //     {
        //         troi: 'u ám',
        //         nhietDo: 'trung bình',
        //         doAm: 'cao',
        //         gio: 'mạnh',
        //         label: true
        //     },
        //     {
        //         troi: 'u ám',
        //         nhietDo: 'nóng',
        //         doAm: 'bình thường',
        //         gio: 'yếu',
        //         label: true
        //     },
        //     {
        //         troi: 'mưa',
        //         nhietDo: 'trung bình',
        //         doAm: 'cao',
        //         gio: 'mạnh',
        //         label: false
        //     },
        // ];
        await DataTrainingModel.bulkCreate(trains);
        const obj = await buildTree();
         console.log(JSON.stringify(obj , null , 2));
        console.log('setup database successfully with force:true');
    } catch (error) {
        console.log(error);
        return false;
    } 
}
module.exports = initialDatabase;  