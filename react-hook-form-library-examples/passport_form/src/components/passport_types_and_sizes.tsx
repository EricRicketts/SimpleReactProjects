import {
  HStack,
  VStack,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import React from 'react';

const PassportTypesAndSizes = () => {

  return (
    <VStack>
      <RadioGroup defaultValue='USPassportBook'>
        <HStack spacing={5}>
          <Radio value='USPassportBook'>U.S. Passport Book</Radio>
          <Radio value='USPassportCard'>U.S. Passport Card</Radio>
          <Radio value='both'>Both</Radio>
        </HStack>
      </RadioGroup>
      <RadioGroup defaultValue='regularBook'>
        <HStack spacing={5}>
          <Radio value='regularBook'>Regular Book (Standard)</Radio>
          <Radio value='largeBook'>Large Book (Non-Standard)</Radio>
        </HStack>
      </RadioGroup>
    </VStack>
  );
}

export default PassportTypesAndSizes;
