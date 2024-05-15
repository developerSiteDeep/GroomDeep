package com.basic.deep.board.repository;

import com.basic.deep.board.dto.BoardBestResponseDTO;
import com.basic.deep.board.dto.BoardCategoryListResponseDTO;
import com.basic.deep.board.dto.BoardMainIndexResponseDTO;
import com.basic.deep.board.dto.BoardSearchResponseDTO;
import com.basic.deep.board.entity.Board;
import com.basic.deep.board.entity.BoardLike;
import com.basic.deep.board.entity.Category;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import static com.basic.deep.board.entity.QBoard.board;
import static com.basic.deep.member.entity.QMember.member;

public class BoardRepositoryImpl implements BoardRepositoryCustom{

    @Autowired
    private JPAQueryFactory queryFactory;

    // 게시글 삭제

    @Override
    public void deleteBoard(Long boardNo) {
        queryFactory.delete(board)
                .where(board.boardNo.eq(boardNo))
                .execute();
    }

    // 1개 게시판 목록 전체 조회
    @Override
    public List<BoardCategoryListResponseDTO> findAllBoardCategory(Category category, Long page) {
        return queryFactory.select(Projections.constructor(
                BoardCategoryListResponseDTO.class, board.boardNo,
                board.boardTitle, board.boardContent,
                board.member_no.memberNickname, board.member_no.memberRandom,
                board.member_no.memberFile, board.boardDate, board.boardReadCount))
                .from(board)
                .where(board.boardCategory.eq(category))
                .orderBy(board.boardNo.desc())
                .limit(10)
                .offset(page*10)
                .fetch();
    }

//    // 메인 페이지용 게시판 조회
//    @Override
//    public List<BoardMainIndexResponseDTO> findAllBoardMain(Board boardNo) {
//        return queryFactory.select(Projections.constructor(
//                board.boardNo, board.boardCategory,
//                board.boardTitle, member.memberNickname,
//                member.memberRandom, board.boardDate
//                ))
//                .from(board)
//                .where()
//                .fetch();
//    }

    // 인기글 게시판 목록 조회
    @Override
    public List<BoardBestResponseDTO> findAllBoardLike(Board boardNo) {
        return null;
    }

    // 게시글 검색
    @Override
    public List<BoardSearchResponseDTO> selectBoardByTitleOrContent(String keyword) {

        return queryFactory.select(Projections.constructor(BoardSearchResponseDTO.class,
                        board.boardNo, board.boardTitle,
                        board.boardContent, board.boardReadCount
                        ))
                .from(board)
                .where(board.boardTitle.like("%" + keyword + "%").or(board.boardContent.like("%" + keyword + "%")))
                .fetch();
    }


}
