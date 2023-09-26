package com.example.demo.controller.memo;

import com.example.demo.controller.memo.dto.MemoRequestDto;
import com.example.demo.repository.memo.entity.Memo;
import com.example.demo.service.memo.MemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/memo")
@CrossOrigin(origins = "*")
public class MemoController {

    private final MemoService memoService;
    @PostMapping("")
    public List<Memo> memoList(@RequestBody MemoRequestDto params){
        return memoService.memberMemo(params);
    }

    @PostMapping("/insert")
    public String memoInsert(@RequestBody MemoRequestDto params){
        return  memoService.memoInsert(params);
    }

}

