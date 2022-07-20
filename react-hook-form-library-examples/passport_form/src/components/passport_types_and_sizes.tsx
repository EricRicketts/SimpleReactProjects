import {
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const PassportTypesAndSizes = () => {

  return (
    <VStack>
      <Text as="b" fontSize='md' noOfLines={1}>
        Select document(s) for which you are submitting fees:
      </Text>
      <RadioGroup defaultValue='USPassportBook'>
        <HStack spacing={5}>
          <Radio value='USPassportBook'>U.S. Passport Book</Radio>
          <Radio value='USPassportCard'>U.S. Passport Card</Radio>
          <Radio value='both'>Both</Radio>
        </HStack>
      </RadioGroup>
      <Text fontSize='sm' noOfLines={1}>
        The U.S. passport card is not valid for international travel.  See Instruction Page 3
      </Text>
      <RadioGroup defaultValue='regularBook'>
        <HStack spacing={5}>
          <Radio value='regularBook'>Regular Book (Standard)</Radio>
          <Radio value='largeBook'>Large Book (Non-Standard)</Radio>
        </HStack>
      </RadioGroup>
      <Text fontSize='sm' noOfLines={1}>
        The large book is for frequent international travelers who need more visa pages.
      </Text>
    </VStack>
  );
}

export default PassportTypesAndSizes;
