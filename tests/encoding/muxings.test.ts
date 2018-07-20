import {muxings} from '../../bitmovin/encoding/encodings/muxings';
import {
  assertItCallsCorrectUrl,
  assertItCallsUrlAndReturnsPromise,
  assertItReturnsUnderlyingPromise,
  mockDelete,
  mockGet,
  mockHttp,
  mockPost,
  testSetup
} from '../assertions';
import {getConfiguration} from '../utils';

const testConfiguration = getConfiguration();
describe('encoding', () => {
  describe('muxings', () => {
    beforeEach(testSetup);
    const mux = muxings(testConfiguration, 'encoding-id', mockHttp);

    const testMuxing = (type, url = type) => {
      const client = mux[type];
      describe(type, () => {
        describe('list', () => {
          assertItCallsCorrectUrl('GET', `/v1/encoding/encodings/encoding-id/muxings/${url}`, client.list);
          assertItReturnsUnderlyingPromise(mockGet, client.list);
        });
        describe('add', () => {
          assertItCallsCorrectUrl('POST', `/v1/encoding/encodings/encoding-id/muxings/${url}`, client.add);
          assertItReturnsUnderlyingPromise(mockPost, client.add);
        });

        describe('muxing', () => {
          describe('details', () => {
            assertItCallsCorrectUrl(
              'GET',
              `/v1/encoding/encodings/encoding-id/muxings/${url}/muxing-id`,
              client('muxing-id').details
            );
            assertItReturnsUnderlyingPromise(mockGet, client('muxing-id').details);
          });
          describe('customData', () => {
            assertItCallsCorrectUrl(
              'GET',
              `/v1/encoding/encodings/encoding-id/muxings/${url}/muxing-id/customData`,
              client('muxing-id').customData
            );
            assertItReturnsUnderlyingPromise(mockGet, client('muxing-id').details);
          });
          describe('delete', () => {
            assertItCallsCorrectUrl(
              'DELETE',
              `/v1/encoding/encodings/encoding-id/muxings/${url}/muxing-id`,
              client('muxing-id').delete
            );
            assertItReturnsUnderlyingPromise(mockDelete, client('muxing-id').delete);
          });
        });
      });
    };

    testMuxing('fmp4');
    testMuxing('mp4');
    testMuxing('ts');
    testMuxing('webm');
    testMuxing('pwebm', 'progressive-webm');
  });

  describe('Muxings list all', () => {
    beforeEach(testSetup);
    const client = muxings(testConfiguration, 'encoding-id', mockHttp);
    describe('list', () => {
      assertItCallsUrlAndReturnsPromise('GET', '/v1/encoding/encodings/encoding-id/muxings', client.list);
    });
  });
});
