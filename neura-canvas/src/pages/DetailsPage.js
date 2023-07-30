import React, { useParams} from 'react';

const DetailsPage = () => {
    const { id } = useParams();
    return (
      <div>
        <h1>Details Page</h1>
        <p>Product ID: {id}</p>
      </div>
    );
};

export default DetailsPage;
