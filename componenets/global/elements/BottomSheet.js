import React, { useEffect } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from 'react-native';


export default React.forwardRef(
    (props, ref) => {
        const [animBackdrop,setanimBackdrop] = React.useState(new Animated.Value(0));
        const [animTranslateY,setanimTranslateY] = React.useState(new Animated.Value(0));

        // const animBackdrop = React.useRef(new Animated.Value(0)).current;
        // const animTranslateY = React.useRef(new Animated.Value(0)).current;

        let ScreenHeight = Dimensions.get("window").height;
        let ScreenWidth = Dimensions.get("window").width;


        React.useImperativeHandle(
            ref,
            () => ({
                show,
                hide: cancelDialog,
            }),
            [showModal],
        );

        useEffect(()=>{
            console.log(showModal)
        },[showModal])

        const [showModal, setShowModal] = React.useState(false)

        const backdropAnimStyle = {
            opacity: animBackdrop,
        };
        const cardWrapperAnimStyle = {
            transform: [
                {
                    translateY: animTranslateY.interpolate({
                        inputRange: [0, 1],
                        outputRange: [ScreenHeight, 0],
                    }),
                },
            ],
        };

        const showAnimation = () => {
            // alert("gaa")
            Animated.parallel([
                Animated.timing(animBackdrop, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.spring(animTranslateY, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration:500,
                    ...{ damping: 30, mass: 1.2, stiffness: 250 },
                }),
            ]).start();
        };

        const hideAnimation = () => {

            Animated.parallel([
                Animated.timing(animBackdrop, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.spring(animTranslateY, {
                    toValue: 0,
                    useNativeDriver: true,
                    ...{ damping: 30, mass: 1.2, stiffness: 250 },
                }),
            ]).start();
            var timeout = setTimeout(()=>{
                hide()
                clearTimeout(timeout)
            },400)
        };

        const show = () => {
            setShowModal(true)
        };

        const hide = () => {
            // setanimBackdrop(new Animated.Value(0))
            // setanimTranslateY(new Animated.Value(0))
            setShowModal(false)
        };

        const cancelDialog = () => {
            // alert("gagan")
            // hide()
            hideAnimation();
        };

        return (
            <Modal
                visible={showModal}
                animationType={"none"}
                onShow={showAnimation}
                onRequestClose={cancelDialog}
                transparent
                statusBarTranslucent={true}
            >
                {props.withOutTouch ? 
                    <View
                        style={[
                            styles.container,
                            props?.containerStyle
                        ]}>
                        <Animated.View
                            style={[styles.backdrop, backdropAnimStyle]}
                        />
                        <Animated.View
                            style={[styles.cardWrapper, cardWrapperAnimStyle]}
                        >

                            {props.children}
                        </Animated.View>
                    </View> :
                <TouchableWithoutFeedback
                    onPress={cancelDialog}
                    accessible={false}>
                    <View
                        style={[
                            styles.container,
                            props?.containerStyle
                        ]}>
                        <Animated.View
                            style={[styles.backdrop, backdropAnimStyle]}
                        />
                        <Animated.View
                            style={[styles.cardWrapper, cardWrapperAnimStyle]}
                        >

                            {props.children}
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>}
            </Modal>
        );
    },
);


const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: "rgba(0,0,0,0.6)",
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        ...StyleSheet.absoluteFill,
    },
    cardWrapper: {
        width: '100%',
    },
});