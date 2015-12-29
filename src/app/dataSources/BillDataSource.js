import ajax from 'superagent';
import Promise from 'promise';

class BillDataSource {
  // Load external bill data via Ajax
  loadData() {
    return new Promise(function (resolve, reject) {
      ajax
        .get('https://still-scrubland-9880.herokuapp.com/bill.json')
        .end(function(err, res) {
          if (res) {
            resolve(res.body);
          }
          if (err) {
            console.warn('Error:', err);
            resolve(null);
          }
        });
    });
  }
}

export default new BillDataSource();
