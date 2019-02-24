const newsService = new NewsService();
const uiService = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = form['search'];

//переделал функцию onSelectChange(), добвил возможность искать одновременно по категориям, странам и ключевому слову; если не выбрана категория и страна то функция ищет везде; изменил XHR запросы на промисы; добавил появление уведомления если ни одна новость по указанным параметрам не найдена.
function onSelectChange() {
    const country = countrySelect.value ? `country=${countrySelect.value}&` : '';
    const category = categorySelect.value ? `category=${categorySelect.value}&` : '';
    const keyword = searchInput.value.length > 3 ? `q=${searchInput.value}&` : '';
    const endpoint = !countrySelect.value && !categorySelect.value ? `everything` : `top-headlines`;

    if (!country && !category && !keyword) {
        uiService.clearContainer();
        return console.error('Введите значение хотя-бы одного параметра для поиска');
    }

    newsService.getTopHeadlinesNews(category, country, keyword, endpoint)
        .then((response) => {
            const { totalResults, articles } = response;

            uiService.clearContainer();

            articles.forEach((article) => uiService.addArticle(article));

            if(!totalResults) {
                let rowElem = document.querySelector('.news-wrap').querySelector('.row')
                rowElem.insertAdjacentHTML('afterbegin', ` 
                    <div class="custom-error">
                        <p>Ни одной новости не найдено</p>
                    </div>
                `)

                setTimeout(function() {rowElem.innerHTML = ''}, 3000)
            }
        })
}

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('input', onSelectChange);

