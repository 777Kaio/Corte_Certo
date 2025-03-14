import { Image, Text, View} from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants"

function Header(props) {
    return <View style= {styles.header}>
        <Image style={styles.logo} source={DebugInstructions.logo} />
        <Text style= {styles.titulo}>{props.texto}</Text>
        </View>
}

export default Header;