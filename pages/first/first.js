import heroList from '../../data/heroList';

Page({
  data: {
    list: []
  },
  onLoad() {
    this.setData({
      list: heroList
    })
  }
})