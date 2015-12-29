import AppDispatcher from '../../dispatcher/AppDispatcher';
import BillStore from '../BillStore';

jest.dontMock('../BillStore');

describe('BillStore', function() {
  var callback;

  beforeEach(function() {
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('provides the loaded bill data', function() {
    BillStore.setData.mockReturnValueOnce(
      {
        "statement": {
          "generated": "2015-01-11",
          "due": "2015-01-25",
          "period": {
            "from": "2015-01-26",
            "to": "2015-02-25"
          }
        },
        "total": 136.03,
        "package": {
          "subscriptions": [
            { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
            { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
            { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
          ],
          "total": 71.40
        }
      }
    );
    expect(Object.keys(BillStore.getData()).length).toBeGreaterThan(0);
  });

});
