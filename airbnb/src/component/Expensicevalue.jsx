import React, { useMemo } from 'react'

const ExpensiveValue = ({ num }) => {
      const computedValue = useMemo(() => {
          let total = 0;
          for (let i = 0; i < 1000; i++) {
              total += i;
          }
          return total + num;
      }, [num]);
  
      return <p>Calculated value: {computedValue}</p>;
  };
      



export default ExpensiveValue
