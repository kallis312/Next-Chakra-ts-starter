import createCache from '@emotion/cache';

/**
 * @see https://griko.id/blog/prevent-fouc-on-next-js-chakra-ui
 */
export default createCache({
  key: 'css',
});
