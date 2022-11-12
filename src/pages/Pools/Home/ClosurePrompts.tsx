// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { ButtonPrimary } from '@rossbulat/polkadot-dashboard-ui';
import { useApi } from 'contexts/Api';
import { useConnect } from 'contexts/Connect';
import { useModal } from 'contexts/Modal';
import { useActivePools } from 'contexts/Pools/ActivePools';
import { usePoolMemberships } from 'contexts/Pools/PoolMemberships';
import { PoolState } from 'contexts/Pools/types';
import { useTheme } from 'contexts/Themes';
import { useTransferOptions } from 'contexts/TransferOptions';
import { useUi } from 'contexts/UI';
import { CardWrapper } from 'library/Graphs/Wrappers';
import { ButtonRowWrapper, PageRowWrapper } from 'Wrappers';

export const ClosurePrompts = () => {
  const { network } = useApi();
  const { activeAccount } = useConnect();
  const { mode } = useTheme();
  const { openModalWith } = useModal();
  const { membership } = usePoolMemberships();
  const { poolsSyncing } = useUi();
  const { isBonding, selectedActivePool, isDepositor, poolNominations } =
    useActivePools();
  const { getTransferOptions } = useTransferOptions();

  const { state, memberCounter } = selectedActivePool?.bondedPool || {};
  const { active, totalUnlockChuncks } = getTransferOptions(activeAccount).pool;
  const targets = poolNominations?.targets ?? [];

  const networkColorsSecondary: any = network.colors.secondary;
  const annuncementBorderColor = networkColorsSecondary[mode];

  // is the pool in a state for the depositor to close
  const depositorCanClose =
    !poolsSyncing &&
    isDepositor() &&
    state === PoolState.Destroy &&
    memberCounter === '1';

  // depositor needs to unbond funds
  const depositorCanUnbond = active.toNumber() > 0 && !targets.length;

  // depositor can withdraw & close pool
  const depositorCanWithdraw =
    active.toNumber() === 0 && totalUnlockChuncks === 0 && !targets.length;

  return (
    <>
      {depositorCanClose && (
        <PageRowWrapper className="page-padding" noVerticalSpacer>
          <CardWrapper
            style={{ border: `1px solid ${annuncementBorderColor}` }}
          >
            <div className="content">
              <h3>Destroy Pool</h3>
              <h4>
                All members have now left the pool.{' '}
                {targets.length > 0
                  ? 'To continue with pool closure, stop nominating.'
                  : depositorCanWithdraw
                  ? 'You can now withdraw and close the pool.'
                  : depositorCanUnbond
                  ? 'You can now unbond your funds.'
                  : 'Withdraw your unlock chunk to proceed with pool closure.'}
              </h4>
              <ButtonRowWrapper verticalSpacing>
                <ButtonPrimary
                  marginRight
                  text="Unbond"
                  disabled={
                    poolsSyncing ||
                    (!depositorCanWithdraw && !depositorCanUnbond)
                  }
                  onClick={() =>
                    openModalWith(
                      'UnbondPoolMember',
                      { who: activeAccount, member: membership },
                      'small'
                    )
                  }
                />
                <ButtonPrimary
                  iconLeft={faLockOpen}
                  text={String(totalUnlockChuncks ?? 0)}
                  disabled={poolsSyncing || !isBonding()}
                  onClick={() =>
                    openModalWith(
                      'UnlockChunks',
                      { bondType: 'pool', poolClosure: true },
                      'small'
                    )
                  }
                />
              </ButtonRowWrapper>
            </div>
          </CardWrapper>
        </PageRowWrapper>
      )}
    </>
  );
};