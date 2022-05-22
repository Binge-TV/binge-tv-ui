const SearchForm = (props) => {
  
    return (
      <>
        <div>
          <form>
            <input name="query" type="text" autoComplete="off"/>
            <button type="submit">Search</button>
          </form>
        </div>
      </>
    );
  }
   
  export default SearchForm;