// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from "styled-components";
import { textPrimary, textSecondary } from "../../theme";

export const AccountWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  .account {
    width: 100%;
    height: 27px;
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${textPrimary};
    }

    .icon {
      position: relative;
      top: 0.1rem;
    }
    h4 {
      margin: 0rem 0.5rem;
      padding: 0;

      > .addr {
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${textSecondary};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;