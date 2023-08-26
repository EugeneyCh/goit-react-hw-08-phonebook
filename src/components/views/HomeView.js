import React from 'react';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh-50px)',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

const HomeView = () => {
  return (
    <div>
      <h1>
        Welcome page of our service
        <span role="img" aria-label="Greeting icon ">
          🤗
        </span>
      </h1>
    </div>
  );
};

export default HomeView;

// const HomeView = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>
//         Welcome page of our service
//         <span role="img" aria-label="Greeting icon ">
//           🤗
//         </span>
//       </h1>
//     </div>
//   );
// };
