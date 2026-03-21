import type { Training } from "./types";

export const training = {
  online: [
    {
      name: "Google AI Professional Certificate",
      institution: "Google",
      period: "2026.03",
      certificateFileName: "Google-AI-Essentials.pdf",
      link: "https://www.coursera.org/professional-certificates/google-ai",
      details: [
        "전략적 프롬프트 설계: [detail=persona]페르소나 설정 및 프롬프트 구조화[/detail]를 통해 직무별 맞춤형 답변의 정확도와 일관성 향상",
        "업무 자동화 체계 구축: [detail=gems]Custom Gems[/detail]를 활용한 반복적 기획안 초안 작성 및 [detail=notebooklm]NotebookLM[/detail] 기반의 기술 문서 분석 프로세스 단축",
        "Vibe Coding 실무 적용: 생성형 AI와의 협업을 통해 [detail=vibe]로직 설계부터 프로토타이핑까지의 개발 사이클[/detail] 가속화",
        "AI 신뢰성 검증: [detail=hallucination]환각(Hallucination)[/detail] 식별을 위한 출처 기반 팩트 체크 및 보안 가이드라인을 준수하는 책임감 있는 AI 활용 원칙 적용",
      ],
      detailDialogs: [
        {
          id: "persona",
          title: "페르소나 설정 및 프롬프트 구조화",
          subtitle:
            "학습 포인트: AI의 답변 품질을 결정하는 '컨텍스트 설계'",
          sections: [
            {
              term: "페르소나(Persona)",
              desc: "AI에게 단순 답변자가 아닌 '10년 차 시니어 프론트엔드 아키텍트'와 같은 구체적인 전문가 정체성을 부여하여 답변의 도메인 깊이를 조절합니다.",
            },
            {
              term: "구조화 프레임워크",
              desc: "구글에서 권장하는 P-T-C-F (Persona, Task, Context, Format) 구조를 적용합니다.",
              subItems: [
                {
                  term: "Context",
                  desc: '단순 요청이 아니라 "사용자 기기가 저사양인 환경", "레거시 코드가 포함된 상황" 등 제약 조건을 명시하여 실무 적합성을 높입니다.',
                },
                {
                  term: "Format",
                  desc: "결과를 JSON, Markdown, 혹은 특정 라이브러리 스타일의 코드 스니펫 등 개발자가 바로 사용할 수 있는 형태로 규격화합니다.",
                },
              ],
            },
          ],
        },
        {
          id: "gems",
          title: "Custom Gems",
          subtitle:
            "학습 포인트: 반복 업무를 위한 '나만의 전용 AI 비서' 제작",
          sections: [
            {
              term: "시스템 프롬프트의 고정",
              desc: "매번 지침을 입력할 필요 없이, 특정 업무(예: PR 리뷰어, API 설계 도우미)에 최적화된 지침을 미리 저장해 둔 맞춤형 챗봇입니다.",
            },
            {
              term: "일관성 유지",
              desc: "팀 내 공통된 '코드 컨벤션'이나 '기획 가이드라인'을 젬(Gem)에 주입하여, 누가 사용하더라도 동일한 수준의 산출물을 얻을 수 있도록 워크플로를 표준화합니다.",
            },
          ],
        },
        {
          id: "notebooklm",
          title: "NotebookLM",
          subtitle:
            "학습 포인트: RAG(검색 증강 생성) 기반의 데이터 신뢰 확보",
          sections: [
            {
              term: "소스 기반 분석",
              desc: "외부 지식이 아닌 사용자가 업로드한 '프로젝트 위키', 'API 명세서', '기술 블로그' 등 내부 자료만을 근거로 답변하게 강제하여 정보의 정확도를 극대화합니다.",
            },
            {
              term: "컨텍스트 통합",
              desc: "수천 페이지의 방대한 기술 문서 사이의 관계를 파악하고, 여러 문서에 흩어진 정보를 하나로 연결하여 분석하는 시간을 획기적으로 단축합니다.",
            },
          ],
        },
        {
          id: "vibe",
          title: "로직 설계부터 프로토타이핑까지의 개발 사이클",
          subtitle:
            "학습 포인트: Vibe Coding 기반의 고속 개발 전략",
          sections: [
            {
              term: "Vibe Coding",
              desc: "개발자가 전체적인 로직의 흐름과 아키텍처(Vibe)를 설계하고, AI가 구체적인 보일러플레이트 코드와 반복적인 로직 구현을 담당하는 고생산성 협업 방식입니다.",
            },
            {
              term: "사이클 단축",
              desc: "아이디어를 즉시 작동하는 프로토타입으로 구현하는 속도를 높여, 기획 검토와 피드백 반영 속도를 가속화합니다. 이는 '오늘의집'과 같이 빠른 이터레이션(Iteration)이 필요한 환경에서 핵심적인 역량입니다.",
            },
          ],
        },
        {
          id: "hallucination",
          title: "환각(Hallucination)",
          subtitle:
            "학습 포인트: AI의 오류를 걸러내는 '검증 자동화 및 책임'",
          sections: [
            {
              term: "Citation Verification",
              desc: "AI의 답변에 포함된 인용 번호를 클릭하여, 실제 원본 문서의 어느 부분에서 인용되었는지 직접 대조하는 검증 프로세스를 수행합니다.",
            },
            {
              term: "보안 가이드라인",
              desc: "민감한 사용자 데이터나 기밀 코드가 외부 모델 학습에 사용되지 않도록 익명화 처리 및 보안 인터페이스 활용 원칙을 준수합니다.",
            },
            {
              term: "비판적 사고",
              desc: "AI의 제안을 맹신하지 않고, 기술적 타당성과 윤리적 편향성을 검토하여 최종 결정권을 인간 개발자가 갖는 'Human-in-the-loop' 구조를 확립합니다.",
            },
          ],
        },
      ],
    },
  ] satisfies Training[],
  offline: [
    {
      name: "SW개발 심화과정(합숙 AWS 교육)",
      institution: "영우디지털",
      period: "2019.10 ~ 2019.10",
      posterFileName: "SW개발자 심화(후속)과정(AWS활용교육)_Cloud한잔.jpg",
      details: [
        "영우디지털 본사 내에서 아마존 웹 서비스의 핵심 기능 이론 학습 및 실습.",
        "교육 내용: 기본 개념, EC2, S3, RDS 등.",
      ],
    },
    {
      name: "SW개발 심화과정(합숙 JAVA 교육)",
      institution: "제주창조경제혁신센터 · Oracle · 영우디지털",
      period: "2019.07.15 ~ 2019.08.10",
      posterFileName: "SW개발자 심화과정(합숙형 Java교육)_Java한잔.jpg",
      details: [
        "제주도 라마다 호텔에서 한 달간 합숙하며 총 4주(140시간 이상) Java 심화 교육 수료. (본인 포함 25명)",
        "1주차: Java SE 8 Programming, 자료구조 & 알고리즘",
        "2주차: 네트워크 응용 프로그램, OOP 최신 트렌드와 Framework 이해",
        "3주차: SQL 실무, JDBC 실무, JSP Programming",
        "4주차: JSP & JDBC 응용 마이크로 프로젝트, Web 표준기술 이해, 해커톤 프로젝트 진행 및 결과 발표",
        "교육생들끼리 팀을 구성하여 해커톤 대회 참가(제주도 여행객 대상 '대신 기다려주기' 웹 서비스 구현)",
      ],
    },
  ] satisfies Training[],
};
