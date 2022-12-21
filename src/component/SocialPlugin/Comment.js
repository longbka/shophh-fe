import { FacebookProvider, Comments } from 'react-facebook';
import { useEffect } from 'react';
export default function Comment({ href }) {
  useEffect(() => {
    console.log('href:', href);
  }, []);
  return (
    <FacebookProvider appId="869452877828671">
      <Comments href={href} />
    </FacebookProvider>
  );
}
