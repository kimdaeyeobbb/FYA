import React from 'react';
import * as S from './style'

export default function GameHeader({gametitle}) {
    return (
        <>
            <S.GameHeaderSection>
                <S.GameHeader>{gametitle}</S.GameHeader>
            </S.GameHeaderSection>
        </>
    );
};