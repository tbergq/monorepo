// @flow

import { useState, useEffect, type Node, type Element } from 'react';

import FadeIn from './FadeIn';

type Props = $ReadOnly<{
  activate: boolean,
  easeTiming?: number,
  left?: boolean,
  right?: boolean,
  up?: boolean,
  down?: boolean,
  by?: number,
  delayBy?: number,
  children: Node,
}>;

function FadeInOut({
  children,
  easeTiming = 0.5,
  left = false,
  right = false,
  up = false,
  down = false,
  by,
  delayBy,
  activate = false,
}: Props): Element<typeof FadeIn> | null {
  const [show, setShow] = useState(activate);

  useEffect(() => {
    const miliseconds = easeTiming * 1000;

    if (activate) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, miliseconds);
    }
  }, [easeTiming, activate]);

  const passDownProps = {
    easeTiming,
    left,
    right,
    up,
    down,
    by,
    delayBy,
  };

  return show ? (
    <FadeIn {...passDownProps} reset={activate}>
      {children}
    </FadeIn>
  ) : null;
}

export default FadeInOut;
