import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export function Categories() {
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
        data={categories}
        keyExtractor={category => category._id}
        renderItem={({ item }) => (
          <Category>
            <Icon>
              <Text>{item.icon}</Text>
            </Icon>

            <Text size={14} weight='600'> {item.name}</Text>
          </Category>
        )}
      />
    </>
  );
}
