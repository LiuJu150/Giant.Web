import request from '@/utils/request'
/**
 * Inv_Inventory API接口服务
 */
export default {
    /**
     * 请求分页数据
     * @param {Object} parameter 查询参数
     * @returns 分页数据
     */
    GetPage(parameter) {
        return request({
            url: '/api/Inv_Inventory/GetPage',
            method: 'post',
            data: parameter
        })
    },
    /**
     * 获取单个实体数据
     * @param {String} id 主键
     * @returns 实体数据
     */
    Get(id) {
        return request({
            url: '/api/Inv_Inventory/Get?id=' + id,
            method: 'get'
        })
    },
    /**
     * 冻结/解冻库存
     * @param {String} status None/Hold
     * @param {Array<String>} ids ids
     * @returns 冻结/解冻
     */
    UpdateStatus(status, ids) {
        return request({
            url: '/api/Inv_Inventory/UpdateStatus?status=' + status,
            method: 'post',
            data: ids
        })
    },
    /**
     * 冻结/解冻库存
     * @param {Object} data None/Hold
     * @returns 冻结/解冻
     */
    Move(data) {
        return request({
            url: '/api/Inv_Inventory/Move',
            method: 'post',
            data: data
        })
    },
    /**
     * 导出库存数据
     * @param {Object} query 库存查询条件
     * @returns excel文件地址
     */
    Export(query) {
        return request({
            url: '/api/Inv_Inventory/Export',
            method: 'post',
            data: query
        })
    }
}
