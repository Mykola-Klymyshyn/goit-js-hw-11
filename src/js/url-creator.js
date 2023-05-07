export default class UrlCreator {
    constructor() {
      this.page = 1;
      this.refs = this.getRefs();
      this.searchQuery = '';
      this.API_KEY = '36026345-16619891ad853df0f66740396';
      this.BASE_URL = 'https://pixabay.com/api/';
    }
  
    getRefs() {
      const refs = {};
      refs.searchForm = document.querySelector('.search-form');
      return refs;
    }
  
    getUrl() {
      const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
      return url;
    }
  
    getQuery() {
      this.searchQuery = this.refs.searchForm.searchQuery.value.trim();
    }
  
    incrementPage() {
      this.page += 1;
    }
  
    clearPageValue() {
      this.page = 1;
    }
  }