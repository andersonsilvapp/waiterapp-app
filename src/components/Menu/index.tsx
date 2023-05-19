import { FlatList } from 'react-native';

import { Text } from '../Text';
import { products } from '../../mocks/products';

import { Product,
  ProductDetails,
  ProductImage,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={product => product._id}
      renderItem={({ item: product}) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://172.19.135.138:3001/uploads/${product.imagePath}`
            }}
          />
          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={15} color="#666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
