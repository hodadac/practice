package com.example.demo.service.memo;

import com.example.demo.controller.memo.dto.MemoRequestDto;
import com.example.demo.controller.memo.dto.MemoResponseDto;
import com.example.demo.repository.memo.MemoRepository;
import com.example.demo.repository.memo.entity.Memo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoServiceImp implements MemoService{
    private final MemoRepository memoRepository;

    @Override
    public List<Memo> findBy() {
        return memoRepository.findAll();
    }

    @Override
    public String memoInsert(MemoRequestDto params) {
        try{
            memoRepository.save(params.toEntity());
            return "success";
        }catch(Exception e){
            return "error";
        }

    }
}
