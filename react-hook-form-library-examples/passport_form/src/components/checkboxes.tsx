import {
  HStack,
  VStack,
  CheckboxGroup,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';

const Checkboxes = () => {
  const [checkedPassportTypes, setCheckedPassportTypes] = React.useState<boolean[]>([false, false, false]);
  React.useEffect(() => {
    console.log(checkedPassportTypes[0], checkedPassportTypes[1], checkedPassportTypes[2]);
  },[checkedPassportTypes]);
  return (
    <VStack spacing={4} align='left'>
      <HStack spacing={4}>
        <CheckboxGroup colorScheme='green'>
          <Checkbox id='passportBook' name='passportBook' value='passportBook'
            isChecked={checkedPassportTypes[0]}
            onChange={(e) => setCheckedPassportTypes([e.target.checked, checkedPassportTypes[1], checkedPassportTypes[2]])}
          >
            U.S. Passport Book
          </Checkbox>
          <Checkbox id='passportCard' name='passportCard' value='passportCard'
            isChecked={checkedPassportTypes[1]}
            onChange={(e) => setCheckedPassportTypes([checkedPassportTypes[0], e.target.checked, checkedPassportTypes[2]])}
          >
            U.S. Passport Card
          </Checkbox>
          <Checkbox id='both' name='both' value='both'
            isChecked={checkedPassportTypes[2]}
            onChange={(e) => setCheckedPassportTypes([checkedPassportTypes[0], checkedPassportTypes[1], e.target.checked])}
          >
            Both
          </Checkbox>
        </CheckboxGroup>
      </HStack>
      <HStack spacing={4}>
        <CheckboxGroup colorScheme='green'>
          <Checkbox id='regularBook' name='regularBook' value='regularBook'>Regular Book (Standard)</Checkbox>
          <Checkbox id='largeBook' name='largeBook' value='largeBook'>Large Book (Non-Standard)</Checkbox>
        </CheckboxGroup>
      </HStack>
    </VStack>
  );
}

export default Checkboxes;
