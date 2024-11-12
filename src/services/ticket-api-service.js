const TicketApiService = () => {
  fetch('https://aviasales-test-api.kata.academy/search').then((res) => {
    console.log(res.json);
    res.json();
  });
};

export default TicketApiService;
