import classes from './VetShops.module.css';
import { Title } from "@mantine/core";
import useBackend from '@contexts/useBackend'; 
import { useEffect } from 'react';

const VetShops = () => {
  const {backend} = useBackend();
  
  useEffect(() => {
    if (!backend) return;
    backend.queries.VetShopsReadmodel({})
      .then((response) => {
        console.log('EL RESPONSE', response)
      })
    const subscription =backend.subscriptions.VetShopsReadmodel({}, (change) => {
      console.log('EL CHANGE', change)
    })
    return () => {
      subscription.close()
    }
  }, [backend])

  return (
    <Title className={classes.title}>
      Vet Shops
    </Title>
  );
}

export default VetShops;
