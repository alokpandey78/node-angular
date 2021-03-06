/* Flatten the movieLists array into an array of video ids
Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.
 */
var movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http:/vikask.com/D.jpg",
                "uri": "http:/vikask.com/D.jpg",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http:/vikask.com/D.jpg",
                "uri": "http:/vikask.com/D.jpg",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http:/vikask.com/c.jpg",
                "uri": "http:/vikask.com/c.jpg",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http:/vikask.com/e.jpg",
                "uri": "http:/vikask.com/e.jpg",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
],
// get result in array
allVideoIdsInMovieLists = [];
// now get result in object
allVideoIdsInMovieListsObject = {};

movieLists.forEach(movieList => {
movieList.videos.forEach(video => {
allVideoIdsInMovieLists.push(video.id);
allVideoIdsInMovieListsObject[video.id] = video.id;
})
});
console.log(allVideoIdsInMovieLists);
// o/p [ 70111470, 654356453, 65432445, 675465 ]
console.log(allVideoIdsInMovieListsObject);
/* 
{ '675465': 675465,
'65432445': 65432445,
'70111470': 70111470,
'654356453': 654356453 }
*/
