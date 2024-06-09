document.addEventListener("DOMContentLoaded", function() {
var images = [
    "https://static.tripzilla.com/thumb/c/8/78536_700x.jpg",
    "https://www.visittci.com/thing/grace-bay-beach-pr/aerial_2048x1365.jpg",
    "https://mybestplace.com/uploads/2022/06/Baia-do-Sancho-Brasile-SOCIAL-1.jpg",
    "https://img.freepik.com/premium-photo/navagio-beac…wreck-sunset-zakynthos-island-greece_273643-9.jpg",
    "https://www.bookaway.com/blog/wp-content/uploads/2023/01/Playa-paraiso-.jpg",
    "https://tripginny.com/wp-content/uploads/2023/06/Anse-Source-dArgent-La-Digue.jpg",
    "https://media.lmpm.website/uploads/sites/16/2024/04/seven-mile-beautiful-beach.jpg",
    "https://travelingcanucks.com/wp-content/uploads/2023/07/bora-bora-french-polynesia-052.jpg",
    "https://loveoahu.org/wp-content/uploads/Lanikai-beach-mokes.jpg",
    "https://afar.brightspotcdn.com/dims4/default/6e188f8/2147483647/strip/false/crop/1900x1069+0+99/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F32%2F01%2F6e818639b43dcb7cdc7334b0f2ff%2Foriginal-lede-elafonsisi-georgios-20tsichlis-shutterstock-707246239.jpg"
];

var listItems = document.querySelectorAll("ul li");

for (var i = 0; i < listItems.length; i++) {
    var img = document.createElement("img");
    img.src = images[i];
    listItems[i].insertBefore(img, listItems[i].firstChild);
}
});

