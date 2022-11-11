import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={459}
    viewBox="0 0 280 459"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="257" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="423" rx="10" ry="10" width="90" height="30" />
    <rect x="142" y="416" rx="30" ry="30" width="135" height="40" />
    <circle cx="132" cy="125" r="125" />
  </ContentLoader>
);

export default Skeleton;
