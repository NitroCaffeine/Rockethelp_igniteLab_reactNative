import { useNavigation } from "@react-navigation/native";
import { Heading, HStack, IconButton, StyledProps, useTheme } from "native-base";
import { CaretLeft } from "phosphor-react-native";


type HeaderProps = StyledProps & {

        title: string;
}

export function Header({title, ...rest}: HeaderProps){
    const {colors} = useTheme()
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={6}
        {...rest}
      
        >
            <IconButton
            icon={<CaretLeft color={colors.gray[200]} size={24}/>}
            onPress={handleGoBack}
            />

            <Heading
            color="gray.100"
            fontSize="lg"
            textAlign="center"
            flex={1}
            ml={-6}
            >

                {title}
            </Heading>

        </HStack>
    )
}