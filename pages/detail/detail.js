import heroDetail from '../../data/heroDetail.js'
Page({
    data: {
        detail: {},
        index: 0
    },
    onLoad(query) {
        heroDetail.forEach(v => {
            if (v.id === query.id) {
                this.setData({
                    detail: v
                })
            }
        })
    },
    changeBgs(event) {
        this.setData({
            index: event.target.dataset.index
        })
    }
})