export default (configContext) => {
  const {
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
      <Field name="annotationGroup">
        <Field name="annotationType" />
        <Field name="annotationNote" />
        <Field name="annotationDate" />
        <Field name="annotationAuthor" />
      </Field>
    </Field>
  );
};
