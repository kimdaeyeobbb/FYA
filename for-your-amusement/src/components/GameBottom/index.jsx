import React from 'react';
import * as S from './style';

export default function GameBottom() {
    return (
        <>
            <S.GameBottomContainer>
                <S.LikeAndShare></S.LikeAndShare>
                <S.GameExplain></S.GameExplain>
                <S.WholeGame></S.WholeGame>
            </S.GameBottomContainer>
        </>
    );
}
