// 15가지 색상 중 랜덤으로 선택
export default function getRandomColor() {
  const colors = [
    "#E0A5D2",
    "#A5D4CA",
    "#1AA6DB",
    "#689054",
    "#691686",
    "#5AAF2C",
    "#1F78A6",
    "#5F6654",
    "#522306",
    "#823CC0",
    "#B80238",
    "#8DCFAE",
    "#2D381D",
    "#7C81FB",
    "#FC4387",
    "#9F688B",
    "#13A4C9",
    "#DEEED5"
  ];

  // 0부터 14까지 랜덤 숫자
  const random = Math.floor(Math.random() * 15);

  // 랜덤 색상 반환
  return colors[random];
}
