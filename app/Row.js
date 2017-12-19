import React, {
  Component,
} from 'react';

import {
  LayoutAnimation,
  UIManager,
  View,
} from 'react-native';

import FoldView from 'react-native-foldview-0.51';

import InfoCard from './components/InfoCard';
import PhotoCard from './components/PhotoCard';
import ProfileCard from './components/ProfileCard';

// Enable LayoutAnimation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// 卡片高度
const ROW_HEIGHT = 100;

const Spacer = ({ height }) => (
  <View
    pointerEvents="none"
    style={{
      height,
    }}
  />
);

export default class Row extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      height: ROW_HEIGHT,
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    this.renderFrontface = this.renderFrontface.bind(this);
    this.renderBackface = this.renderBackface.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  handleAnimationStart(duration, height) {
    const isExpanding = this.state.expanded;

    const animationConfig = {
      duration,
      update: {
        type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.height,
      },
    };

    LayoutAnimation.configureNext(animationConfig);

    this.setState({
      height,
    });
  }
  renderFrontface() {
    return (
      <InfoCard onPress={this.flip} content='展开之前卡片'/>
    );
  }
  renderBackface() {
    return (
      <ProfileCard onPress={this.flip} content='展开后第二卡片'/>
    );
  }

  render() {
    const { height } = this.state;
    const { zIndex } = this.props;

    const spacerHeight = height - ROW_HEIGHT;

    return (
      <View
        style={{
          flex: 1,
          zIndex,
        }}
      >
        <View
          style={{
            height: ROW_HEIGHT,
            margin: 10,
          }}
        >
        
          <FoldView
            expanded={this.state.expanded}
            onAnimationStart={this.handleAnimationStart}
            perspective={1000}
              // 展开之后第二个卡片
            renderBackface={this.renderBackface}
              // 未展开卡片
            renderFrontface={this.renderFrontface}
          >
            {/* 展开之后第一个卡片 */}
            <PhotoCard onPress={this.flip} content='展开第一卡片' />
          </FoldView>

        </View>

        <Spacer height={spacerHeight} />
      </View>
    );
  }
}
