const http = new HttpClient();

class NewsService {
     /**
      * 
      * @param {Function} callback
      * @param {String} category 
      * @param {String} country 
      */
    getTopHeadlinesNews(callback, category = ENV.category, country = ENV.country, newsType) {
        http.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }
}