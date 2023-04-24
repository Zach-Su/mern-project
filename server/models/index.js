// 如果有人require models資料夾的話，就會得到後面的Objects
module.exports = {
  user: require("./user-model"),
  course: require("./course-model")
};
