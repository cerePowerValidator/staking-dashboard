// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigNumber from 'bignumber.js';
import { MinBondPrecision } from 'consts';
import { useApi } from 'contexts/Api';
import { useTooltip } from 'contexts/Tooltip';
import { useValidators } from 'contexts/Validators';
import { motion } from 'framer-motion';
import {
  OverSubscribedWrapper,
  TooltipPosition,
  TooltipTrigger,
} from 'library/ListItem/Wrappers';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { OversubscribedProps } from '../types';

export const Oversubscribed = ({
  batchIndex,
  batchKey,
}: OversubscribedProps) => {
  const { t } = useTranslation('library');
  const { consts, network } = useApi();
  const { meta } = useValidators();
  const { setTooltipPosition, setTooltipMeta, open } = useTooltip();

  const identities = meta[batchKey]?.identities ?? [];
  const supers = meta[batchKey]?.supers ?? [];
  const stake = meta[batchKey]?.stake ?? [];

  // aggregate synced status
  const identitiesSynced = identities.length > 0 ?? false;
  const supersSynced = supers.length > 0 ?? false;

  const synced = {
    identities: identitiesSynced && supersSynced,
    stake: stake.length > 0 ?? false,
  };

  const eraStakers = stake[batchIndex];

  const totalNominations = eraStakers?.total_nominations ?? 0;
  const lowestReward = eraStakers?.lowestReward ?? 0;

  const displayOversubscribed =
    synced.stake &&
    consts.maxNominatorRewardedPerValidator.isLessThanOrEqualTo(
      totalNominations
    );

  const posRef = useRef(null);

  const lowestRewardFormatted = new BigNumber(lowestReward)
    .decimalPlaces(MinBondPrecision)
    .toFormat();

  const tooltipText = `${t(
    'overSubscribedMinReward'
  )} ${lowestRewardFormatted} ${network.unit}`;

  const toggleTooltip = () => {
    if (!open) {
      setTooltipMeta(tooltipText);
      setTooltipPosition(posRef);
    }
  };

  return (
    <>
      {displayOversubscribed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <div className="label warning">
            <TooltipTrigger
              className="tooltip-trigger-element"
              data-tooltip-text={tooltipText}
              onMouseMove={() => toggleTooltip()}
            />
            <TooltipPosition ref={posRef} />
            <OverSubscribedWrapper>
              <span className="warning">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  transform="shrink-2"
                  className="warning"
                />
              </span>
              {lowestRewardFormatted} {network.unit}
            </OverSubscribedWrapper>
          </div>
        </motion.div>
      )}
    </>
  );
};
