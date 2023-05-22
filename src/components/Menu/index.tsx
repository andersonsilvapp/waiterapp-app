import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';

import { ProductContainer,
  ProductDetails,
  ProductImage,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Product } from '../../@types/Product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={product => product._id}
        renderItem={({ item: product}) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
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
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
