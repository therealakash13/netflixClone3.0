const options = {
  params: {
    include_adults: "false",
    includE_videos: "true",
    language: "en-US",
    sort_by: "popularity.desc",

    region: "IN",
  },
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgzYWNlOTUzYTE3ZTE0MDEyYjJmMzk3ZTk5OTk0OSIsIm5iZiI6MTcxODI2OTY0OS40MzEsInN1YiI6IjY2NmFiNmQxNDgzN2NlYmFhZWE3NTAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgTgJ5BwuDCF75KgXJqiBapsAgrXdK8tGGnLUA-YhAI",
  },
};