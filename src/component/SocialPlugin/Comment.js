import { FacebookProvider, Comments } from 'react-facebook';

export default function Comment() {
  return (
    <FacebookProvider appId="869452877828671">
      <Comments href="https://developers.facebook.com/docs/plugins/comments#configurator" />
    </FacebookProvider>
  );
}
