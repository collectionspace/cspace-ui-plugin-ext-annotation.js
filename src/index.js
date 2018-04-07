import collectionobject from './collectionobject';

module.exports = () => configContext => ({
  extensions: {
    annotation: {
      collectionobject: collectionobject(configContext),
    },
  },
});
