let arr = [
    {naem:"test",hobby:"game"},
    {naem:"test2",hobby:"game"},
    {naem:"test3",hobby:"game2"}
];

const gamePeople = arr.filter(
    (item) => {
    if(item.hobby == "game") return true;
});
 