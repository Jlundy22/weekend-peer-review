const dispatch = useDispatch()

  useEffect(() => {
    getCharacters();
  }, [])


  const getCharacters = () => {
    axios.get('/anime')
      .then(response => {
        // runs 2 different reducers! Wow!
        dispatch({ type: 'SET_CHARACTERS', payload: response.data });
      })
      .catch(error => {
        alert('Could not get characters. Please try again later');
        console.log('Error on GET', error);
      })
  }