// @ts-nocheck tinyurl package has no types definitions, doing this to avoid errors
import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

// https://www.npmjs.com/package/tinyurl
import TinyURL from 'tinyurl';
import { Wrapper, SubmitButton, InputWrapper, Input } from './styles';
import IS_ADDING_HISTORY from '../../Reducers/actions';

interface Values {
  urlInput: string;
}

const isValidHttpUrl = (urlValue?: string): boolean => {
  if (urlValue) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !!pattern.test(urlValue);
  }
  return false;
};

const UrlShortener: React.FC = () => {
  const dispatch = useDispatch();

  const handleFormSubmit: any = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    try {
      const shortUrl = await TinyURL.shorten(values.urlInput);
      dispatch({
        type: IS_ADDING_HISTORY,
        payload: {
          url: values.urlInput,
          shortUrl,
        },
      });
      setSubmitting(false);
      resetForm();
    } catch (error) {
      // TODO: proper error handling
      console.log('error', error);
      alert('Failed to submit');
    }
  };
  return (
    <Formik
      initialValues={{
        urlInput: '',
      }}
      validationSchema={Yup.object().shape({
        urlInput: Yup.string().required('Url to shorten is required').test('isValidHttpUrl', 'Invalid url', isValidHttpUrl),
      })}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <InputWrapper error={!!errors?.urlInput}>
              <Input
                placeholder="enter your url to shorten"
                id="urlInput"
                name="urlInput"
                value={values.urlInput}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.urlInput && <span>{errors.urlInput}</span>}
            </InputWrapper>
            <SubmitButton disabled={isSubmitting || !!errors?.urlInput} title="Shorten" type="submit" />
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default UrlShortener;
