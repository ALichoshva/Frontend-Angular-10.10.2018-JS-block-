const httpClient = new HttpClient();

class NewsService {
    /**
     * 
     * @param {String} category 
     * @param {String} country 
     * @param {Function} callback
     * @param {String} keyword
      */

    getTopHeadlinesNews(category = '', country = '', keyword = '', endpoint = 'top-headlines') {
        return httpClient.get(`${ENV.apiUrl}/${endpoint}?${keyword}${category}${country}apiKey=${ENV.apiKey}`);
    }
}