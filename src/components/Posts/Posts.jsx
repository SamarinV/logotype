import React from "react";
import styles from "./Posts.module.scss";
import Post from "../Post/Post";

import post1Small from "../../images/posts/post1-320.png";
import post1Medium from "../../images/posts/post1-680.png";
import post1Large from "../../images/posts/post1-960.png";
import post2Small from "../../images/posts/post2-320.png";
import post2Medium from "../../images/posts/post2-680.png";
import post2Large from "../../images/posts/post2-960.png";
import post3Small from "../../images/posts/post3-320.png";
import post3Medium from "../../images/posts/post3-680.png";
import post3Large from "../../images/posts/post3-960.png";
import post4Small from "../../images/posts/post4-320.png";
import post4Medium from "../../images/posts/post4-680.png";
import post4Large from "../../images/posts/post4-960.png";
import post5Small from "../../images/posts/post5-320.png";
import post5Medium from "../../images/posts/post5-680.png";
import post5Large from "../../images/posts/post5-960.png";
import post6Small from "../../images/posts/post6-320.png";
import post6Medium from "../../images/posts/post6-680.png";
import post6Large from "../../images/posts/post6-960.png";
import post7Small from "../../images/posts/post7-320.png";
import post7Medium from "../../images/posts/post7-680.png";
import post7Large from "../../images/posts/post7-960.png";
import post8Small from "../../images/posts/post8-320.png";
import post8Medium from "../../images/posts/post8-680.png";
import post8Large from "../../images/posts/post8-960.png";
import post9Small from "../../images/posts/post9-320.png";
import post9Medium from "../../images/posts/post9-680.png";
import post9Large from "../../images/posts/post9-960.png";

export default function Posts() {
  return (
    <div className={styles.posts}>
      <Post
        imageLarge={post1Large}
        imageMedium={post1Medium}
        imageSmall={post1Small}
        text1="Lifestyle"
        text2="Eat Right For Your Exercise Regime"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post2Large}
        imageMedium={post2Medium}
        imageSmall={post2Small}
        text1="Lifestyle"
        text2="The Look: Perfect Balance"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post3Large}
        imageMedium={post3Medium}
        imageSmall={post3Small}
        text1="Style"
        text2="Fun Things to Do in Rome"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post4Large}
        imageMedium={post4Medium}
        imageSmall={post4Small}
        text1="Style"
        text2="24 Colorful Ceilings That Add Unexpected Contrast to Any Room"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post5Large}
        imageMedium={post5Medium}
        imageSmall={post5Small}
        text1="Lifestyle"
        text2="9 New Songs to Heat Up Your Fall Playlist"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post6Large}
        imageMedium={post6Medium}
        imageSmall={post6Small}
        text1="Events"
        text2="What You Need on Your Bedside Table"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post7Large}
        imageMedium={post7Medium}
        imageSmall={post7Small}
        text1="Travel"
        text2="When Two Wheels Are Better Than Four"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post8Large}
        imageMedium={post8Medium}
        imageSmall={post8Small}
        text1="Travel"
        text2="26 Living Room Ideas from the Homes of Top Designers"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
      <Post
        imageLarge={post9Large}
        imageMedium={post9Medium}
        imageSmall={post9Small}
        text1="Music"
        text2="What Makes Your City’s Style Unique"
        author="Niek Bove"
        date="April 8, 2018"
        views="3K"
        text3="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
      />
    </div>
  );
}
